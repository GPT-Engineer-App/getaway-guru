import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Button, Icon } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPhone } from "react-icons/fa";

const Index = () => {
  const packages = [
    {
      title: "Enchanting Umrah",
      description: "Experience a spiritual journey to the holy cities of Mecca and Medina.",
      duration: "11 days / 10 nights",
      price: "$3,999",
      video: "https://www.youtube.com/embed/NEW_VIDEO_ID_HERE",
      included: ["Round-trip airfare", "5-star hotel accommodations in Mecca (5 nights) and Medina (5 nights)", "Daily breakfast and dinner", "Guided tours of holy sites", "Visa assistance", "Haramain Bullet Train between Mecca and Medina"],
    },
    {
      title: "Tropical Paradise",
      description: "Enjoy a luxurious getaway on a pristine tropical island.",
      duration: "7 days / 6 nights",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHZhY2F0aW9ufGVufDB8fHx8MTcxMTgyMDUzN3ww&ixlib=rb-4.0.3&q=80&w=1080",
      included: ["Round-trip airfare", "Beachfront resort accommodations", "All meals and drinks", "Daily activities and entertainment", "Airport transfers"],
    },
    {
      title: "Mountain Adventure",
      description: "Experience the thrill of hiking and exploring beautiful mountain ranges.",
      duration: "5 days / 4 nights",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1478399895294-ba93fb7ff943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHZhY2F0aW9ufGVufDB8fHx8MTcxMTgyMDUzOHww&ixlib=rb-4.0.3&q=80&w=1080",
      included: ["Round-trip airfare", "Mountain lodge accommodations", "Guided hikes and nature walks", "Equipment rentals", "Daily breakfast"],
    },
    {
      title: "City Explorer",
      description: "Discover the vibrant culture and attractions of world-famous cities.",
      duration: "4 days / 3 nights",
      price: "$999",
      image: "https://images.unsplash.com/26/city-scape.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHZhY2F0aW9ufGVufDB8fHx8MTcxMTgyMDUzOHww&ixlib=rb-4.0.3&q=80&w=1080",
      included: ["Round-trip airfare", "Centrally located hotel", "Hop-on hop-off bus tour", "Admission to top attractions", "Daily breakfast"],
    },
    {
      title: "Enchanting Spain",
      description: "Fall in love with the passionate culture and stunning architecture of Spain.",
      duration: "8 days / 7 nights",
      price: "$2,199",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFpbiUyMHRyYXZlbHxlbnwwfHx8fDE2ODAxNzc1NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      included: ["Round-trip airfare", "4-star hotel accommodations", "Daily breakfast", "Guided city tours", "Flamenco show", "Cooking class"],
    },
    {
      title: "Timeless Turkey",
      description: "Uncover the mysteries of Turkey's ancient ruins and natural wonders.",
      duration: "11 days / 10 nights",
      price: "$2,899",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjB0cmF2ZWx8ZW58MHx8fHwxNjgwMTc3NjA2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      included: ["Round-trip airfare", "Boutique hotel accommodations", "Daily breakfast and dinner", "Guided tours of Istanbul, Cappadocia, and Ephesus", "Hot air balloon ride"],
    },
  ];

  const umrahImages = [
    "https://images.unsplash.com/photo-1590088263010-d7b0c4eaec6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWNjYXxlbnwwfHx8fDE2ODAxNzgxMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtZWNjYXxlbnwwfHx8fDE2ODAxNzgxMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1548256868-f7fa6e837d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtZWNjYXxlbnwwfHx8fDE2ODAxNzgxMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  ];

  return (
    <Box>
      <Box bg="blue.500" color="white" py={8}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Dream Vacations
              </Heading>
              <Text fontSize="xl">Discover amazing vacation packages tailored just for you!</Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
              {umrahImages.map((image, index) => (
                <Box key={index} borderRadius="lg" overflow="hidden" boxShadow="md">
                  <Image src={image} alt={`Umrah Image ${index + 1}`} />
                </Box>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {packages.map((pkg, index) => (
            <Box key={index} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={pkg.image} alt={pkg.title} />
              <Box p={6} h="100%">
                <Heading as="h3" size="lg" mb={2}>
                  {pkg.title}
                </Heading>
                <Text mb={2}>{pkg.description}</Text>
                <Text fontWeight="bold" mb={2}>
                  {pkg.duration} | {pkg.price}
                </Text>
                <Box mb={4}>
                  <Text fontWeight="bold" mb={2}>
                    What's Included:
                  </Text>
                  <ul>
                    {pkg.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Box>
                <Button colorScheme="blue" size="lg">
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
