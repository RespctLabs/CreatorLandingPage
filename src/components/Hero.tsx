import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Text,
  Flex,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
  FormControl,
  Input,
} from "@chakra-ui/react";
import error from "next/error";
import Head from "next/head";
import { FormEvent, ChangeEvent, useState } from "react";

import { init, send } from "emailjs-com";

init("l2cNnJYpEYeatm-L3");

export default function Hero() {
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);
  const [Email, setEmail] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Sent, setSent] = useState(false);

  // const Hero = ( ) => (
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 10 }}
        >
          <Heading
            fontWeight={1000}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Own your Reputation
          </Heading>
          <Text color={"gray.500"}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
        </Stack>
      </Container>
      <Flex align={"center"} justify={"center"} w="100vw" pb={12}>
        <Container
          maxW={"lg"}
          bg={useColorModeValue("white", "whiteAlpha.100")}
          boxShadow={"xl"}
          rounded={"lg"}
          p={6}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: "xl", sm: "2xl" }}
            textAlign={"center"}
            mb={5}
          >
            Sign up for our Beta
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              setError(false);
              setState("submitting");

              // remove this code and implement your submit logic right here
              setTimeout(() => {
                if (Email === "fail@example.com") {
                  setError(true);
                  setState("initial");
                  return;
                }

                setState("success");
              }, 1000);
            }}
          >
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"email"}
                type={"email"}
                required
                placeholder={"Your Email"}
                aria-label={"Your Email"}
                value={Email}
                disabled={state !== "initial"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("EMail", Email);
                  setLoading(true);
                  // promise with then and catch

                  send("service_3rcb66l", "template_zdbh9hw", {
                    message: Email,
                  })
                    .then((res) => {
                      console.log(res);
                      setLoading(false);
                      setSent(true);
                    })
                    .catch((err) => {
                      console.log(err);
                      setLoading(false);
                      // alert("Error: ", err);
                    });
                }}
                colorScheme={state === "success" ? "green" : "blue"}
                isLoading={state === "submitting"}
                w="100%"
                type={state === "success" ? "button" : "submit"}
              >
                {state === "success" ? <CheckIcon /> : "Submit"}
              </Button>
            </FormControl>
          </Stack>
          <Text
            mt={2}
            textAlign={"center"}
            color={error ? "red.500" : "gray.500"}
          >
            {error ? "Oh no an error occured! 😢 Please try again later." : ""}
          </Text>
        </Container>
      </Flex>
    </>
  );
}
