export const ProjectHeader = ({ banner, reference: { name, title, link } }) => {
  return (
    <div>
      <span class='image main'>
        <img src={banner} alt='' />
      </span>
      <div class='flex-row aligned'>
        <em>
          <strong>Project Name:</strong> {name} -
          <a href={link} className='link link--icon'>
            {title}
          </a>
        </em>
      </div>
    </div>
  );
};
