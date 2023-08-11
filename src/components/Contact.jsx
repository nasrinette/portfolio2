import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 5rem 0;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    max-width: 600px;
    margin: 2rem auto;

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 1rem;
      border: none;
      outline: none;
      font-size: 1rem;
      border-radius: 5px;
    }

    button {
      background-color: #f8b400;
      color: #333;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f9c74f;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me</h2>
      <form action="your_server_endpoint" method="post">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
