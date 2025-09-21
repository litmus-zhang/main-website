import React, { useState } from "react";
// {"operationName":"SubscribeToNewsletter","query":"mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {\n  subscribeToNewsletter(input: $input) {\n    status\n    __typename\n  }\n}","variables":{"input":{"email":"abdulsalamlukmon9@gmail.com","publicationId":"63d17e562086bff3543caabb"}}}

const NewsletterForm =  () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const requestBody = {
      operationName: "SubscribeToNewsletter",
      query: `
        mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
          subscribeToNewsletter(input: $input) {
            status
          }
        }
      `,
      variables: {
        input: {
          email: email.trim(),
          publicationId: "63d17e562086bff3543caabb", // Replace with your Hashnode publication ID
        },
      },
    };
    console.log(requestBody);

    try {
      const response = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      console.log({response});

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData.errors);
        setMessage("Subscription failed. Please try again.");
      } else {
        setMessage("Subscription successful! Thank you for subscribing.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
        required
      />
      <button type="submit" className="btn-primary">
        Subscribe
      </button>
      {message && <p className="mt-4">{message}</p>}
    </form>
  );
};

export default NewsletterForm;
