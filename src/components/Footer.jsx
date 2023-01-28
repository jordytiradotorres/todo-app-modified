export const Footer = ({ urlGithubUser = "" }) => {
  return (
    <div class="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href={urlGithubUser}>Jordy Tirado Torres</a>.
    </div>
  );
};
