import { ProjectHeader } from 'components';

export default ({ sourceCode, banner, reference }) => {
  return (
    <div>
      <ProjectHeader source={sourceCode} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        This project was an experiment to pull together a number of technologies I wanted to learn more about and
        package them up into something small. This was a pretty tiny setup to keep it tight. In a nutshell, it is a 3D
        React scene utilising ThreeJS communicating with a Slack instance via WebSockets, receiving notifications and
        displaying them in real time. All the elements were made in blender with realtime HTML mixed in.
      </section>
      <h5>Tech Details</h5>
      <section className='body'>
        <p>
          The <a href='https://api.slack.com/'>Slack API </a>
          is super flexible and I would highly recommend checking it out if you haven't played with it before! Whilst
          core three.js in itself is great, it doesn’t scale well and it can be tricky to manage a project with lots of
          pieces. I wanted to see how I could manage that better so this project utilises{' '}
          <a href='https://github.com/pmndrs/drei'>react-drei</a> &
          <a href='https://r3f.docs.pmnd.rs/getting-started/introduction'> react-fiber</a> to allow the project to scale
          by utilising React’s component based design. I highly recommend building 3D work in this way as it just makes
          sense. I'm also using react-spring here as I had never used it before and wanted to check it out.
          <p>
            Using HTML in 3D It’s important to note that message content themselves are actually still HTML. Drei has an
            HTML wrapper that allows us to position HTML in 3D space so the message box is a mesh (primarily so it has a
            little thickness and catches the light nicely) but the content is vanilla HTML using Material UI Typography.
          </p>
          <p>
            This project utilises <a href='https://github.com/dataarts/dat.gui'>dat.GUI</a>, which I've since moved away
            from in favour of <a href='https://github.com/pmndrs/leva'>Leva</a> . I find myself having core elements
            that stay throughout the project and others that come and go as I'm working out the details and want to save
            time. Using DatGUI to manipulate values in realtime is useful.
          </p>
        </p>
        <div className='imageContainer'>
          <img src='images/Lamora/Lamora_1.gif' />
          <img src='images/Lamora/Lamora_2.gif' />
        </div>
      </section>
      <h5>The Result</h5>
      <div className='centered'>
        <video src='videos/Lamora.mp4' type='video/mp4' controls autoplay muted />
      </div>
    </div>
  );
};
