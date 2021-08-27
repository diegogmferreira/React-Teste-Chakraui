import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Galvão</Text>
          <Text color="gray.300" fontSize="small">
            di.galvao89@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Diego Galvão" src="https://media-exp1.licdn.com/dms/image/C4D03AQF4CIiAuMozMw/profile-displayphoto-shrink_800_800/0/1535509205667?e=1623888000&v=beta&t=NKl7QRImlB7Fxt2jgDrCy3ZS6xkFVgCJQvJ02RAs3ww" />
    </Flex>
  );
}