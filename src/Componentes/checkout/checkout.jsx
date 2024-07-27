import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    List,
    ListItem,
    useToast,
  } from '@chakra-ui/react';
import { db } from '../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const checkout = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        repetedEmail: '',
        phone: '',
    })
    const [error, setError] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cart, getTotalPrice } = useContext(Context);
    const toast = useToast();

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name = 'Agregar un nombre'
        } else if (user.name.length < 3 || user.name.length > 15) {
            errors.name = 'El nombre tiene que ser entre 3 y 15 caracteres'
        }

        if(!user.email) {
            errors.email = 'Agregar un correo electrónico'
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'Correo electrónico inválido'
        }

        if(!user.repetedEmail) {
            errors.repetedEmail = 'Ingresar el mismo email'
        } else if (user.email !== user.repetedEmail) {
            errors.repetedEmail = 'Los correos electrónicos no coinciden'
        }

        if(!user.phone) {
            errors.phone = 'Agregar un número de teléfono'
        } else if (user.phone.length < 8) {
            errors.phone = 'Ingresar un teléfono válido'
        }
        setError(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          onOpen();
        }
    };

    const getOrder = async () => {
        if (cart.length === 0) {
            toast({
                title: "Carrito vacío",
                description: "No puedes realizar una compra con el carrito vacío",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        const orderCollection = collection(db, 'orders');

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotalPrice(),
                fechaDeCompra: Timestamp.now()
            }
            const orderRef = await addDoc(orderCollection, order)
            toast({
                title: "Compra exitosa",
                description: `Tu orden ha sido creada con el ID: ${orderRef.id}`,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            onClose();
        } catch (error) {
            toast({
                title: "Error en la compra",
                description: "Hubo un problema al procesar tu orden. Por favor, intenta de nuevo.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    }

  return (
    <Box maxWidth="500px" margin="auto" padding={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Heading>Checkout</Heading>
          <FormControl isInvalid={!!error.name}>
            <FormLabel>Nombre</FormLabel>
            <Input name="name" value={user.name} onChange={updateUser} />
            <Text color="red.500">{error.name}</Text>
          </FormControl>
          <FormControl isInvalid={!!error.email}>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" value={user.email} onChange={updateUser} />
            <Text color="red.500">{error.email}</Text>
          </FormControl>
          <FormControl isInvalid={!!error.repetedEmail}>
            <FormLabel>Confirmar Email</FormLabel>
            <Input name="repetedEmail" type="email" value={user.repetedEmail} onChange={updateUser} />
            <Text color="red.500">{error.repetedEmail}</Text>
          </FormControl>
          <FormControl isInvalid={!!error.phone}>
            <FormLabel>Teléfono</FormLabel>
            <Input name="phone" type="tel" value={user.phone} onChange={updateUser} />
            <Text color="red.500">{error.phone}</Text>
          </FormControl>
          <Button type="submit" bg={"#5784a7"}>Finalizar Compra</Button>
        </VStack>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resumen de la Compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="stretch" spacing={4}>
              <Box>
                <Heading size="sm">Información del Usuario:</Heading>
                <Text>Nombre: {user.name}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Teléfono: {user.phone}</Text>
              </Box>
              <Box>
                <Heading size="sm">Carrito:</Heading>
                <List spacing={2}>
                  {cart.map((prod, index) => (
                    <ListItem key={index}>
                      {prod.name} - Cantidad: {prod.quantity} - Precio: ${prod.price * prod.quantity}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Text fontWeight="bold">Total: ${getTotalPrice()}</Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button bg={"#5784a7"} mr={3} onClick={getOrder}>
              Confirmar Compra
            </Button>
            <Button variant="ghost" bg={"red"} onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default checkout;