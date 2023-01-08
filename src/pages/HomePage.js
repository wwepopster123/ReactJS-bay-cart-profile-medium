import Logo from "../Logo.svg";

export const HomePage = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4 blue"
          src={Logo}
          alt=""
          width="75"
          height="75"
        />
        <h1 className="display-5 fw-bold">I want to tell you</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This project does not have to be well designed, it demonstrates
            working with data in ReactJS. I hope this project will be a starting
            point in my career. There is no data saving implemented here, the
            project is only needed to show the work of Contest and all my
            knowledge gained as a result of self-study
          </p>
        </div>
      </div>
    </div>
  );
};
