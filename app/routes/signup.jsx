import { redirect } from "@remix-run/node";
import { useActionData, Form,   useTransition } from "@remix-run/react";


export async function action({ request }) {
  const body = await request.formData();
  console.log(body?._fields)
  return body?._fields;
}


export default function Index() {
  const actionData = useActionData();
  const transition = useTransition();
  console.log(actionData)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Create your account</h1>
      <Form method="POST" action="/signup">
      <fieldset
        disabled={transition.state === "submitting"}
      >
  <label>Search <input name="username" type="text" /></label>
  <button type="submit">Search</button>
  </fieldset>
</Form>




    </div>
  );
}