import Head from 'next/head';
import { Button, Container, Header, Message, Segment } from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Indian TV Schedules</title>Real-Time Access to TV Schedules
        <meta name="description" content="Real-Time Access to Indian TV Schedules." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container textAlign="center" style={{ marginTop: '50px' }}>
        <Header as="h1" style={{ fontSize: '3em' }}>
          Indian TV Schedules
        </Header>
        <main>
          <Message info style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Message.Header>Access TV Guide for Indian Channels</Message.Header>
            <p>
            The Indian TV Schedules repository provides a comprehensive and updated TV Guide that can be used directly with popular OTT applications such as OTT Navigator and TiviMate. This repository is designed to simplify the process of accessing TV program schedules for Indian channels, making it easier to stay on top of your favorite shows.
            </p>
          </Message>
          <Segment style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Header as="h3" style={{ fontSize: '1.5em' }}>
              TV Guide
            </Header>
            <p>Click the links below to access or download TV Guide:</p>
            <Button 
              primary 
              size="large" 
              href="/jiotv.xml.gz" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ marginTop: '10px' }}
              aria-label="Download Jio TV Guide"
            >
              Download Jio TV Guide
            </Button>
            <Button 
              secondary 
              size="large" 
              href="/tataplay.xml.gz" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ marginTop: '10px', marginLeft: '10px' }}
              aria-label="Download TataPlay TV Guide"
            >
              Download TataPlay TV Guide
            </Button>
          </Segment>
          <Message success style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Message.Header>Note</Message.Header>
            <p>
              This content is for educational purposes only. Please do not misuse or abuse the service. The creators
              are not responsible for any misuse of the content or links provided.
            </p>
          </Message>
        </main>
      </Container>
    </div>
  );
}
