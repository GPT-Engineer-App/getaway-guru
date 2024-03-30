import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Button, Icon } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPhone } from "react-icons/fa";

const Index = () => {
  const packages = [
    {
      title: "Tropical Paradise",
      description: "Enjoy a luxurious getaway on a pristine tropical island.",
      image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHZhY2F0aW9ufGVufDB8fHx8MTcxMTgyMDUzN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Mountain Adventure",
      description: "Experience the thrill of hiking and exploring beautiful mountain ranges.",
      image: "https://images.unsplash.com/photo-1478399895294-ba93fb7ff943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHZhY2F0aW9ufGVufDB8fHx8MTcxMTgyMDUzOHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "City Explorer",
      description: "Discover the vibrant culture and attractions of world-famous cities.",
      image: "https://images.unsplash.com/26/city-scape.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHZhY2F0aW9ufGVufDB8fHx8MTcxMTgyMDUzOHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      <Box bg="blue.500" color="white" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Dream Vacations
          </Heading>
          <Text fontSize="xl">Discover amazing vacation packages tailored just for you!</Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {packages.map((pkg, index) => (
            <Box key={index} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={pkg.image} alt={pkg.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {pkg.title}
                </Heading>
                <Text>{pkg.description}</Text>
                <Button colorScheme="blue" size="lg" mt={4}>
                  Book Now
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Why Choose Us
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Stack align="center">
              <Icon as={FaPlane} boxSize={12} color="blue.500" />
              <Text fontWeight="bold">Convenient Flights</Text>
            </Stack>
            <Stack align="center">
              <Icon as={FaHotel} boxSize={12} color="blue.500" />
              <Text fontWeight="bold">Luxurious Hotels</Text>
            </Stack>
            <Stack align="center">
              <Icon as={FaUmbrellaBeach} boxSize={12} color="blue.500" />
              <Text fontWeight="bold">Exotic Destinations</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="blue.500" color="white" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Book Your Dream Vacation?
          </Heading>
          <Button colorScheme="white" size="lg" leftIcon={<FaPhone />}>
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
