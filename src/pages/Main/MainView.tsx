import useViewModel from "./MainViewModel";

import Photo from "./components/Photo/Photo";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import LoadingSpinner from "pages/Main/components/Loader/LoadingSpinner";

import classes from "./MainView.module.scss";

export default function MainView() {
  const { data, error, isLoading } = useViewModel();

  if (isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error!.description}</div>;
  }

  return (
    <div id="home" className={classes.mainContainer}>
      <div className={classes.navbarContainer}>
        <Navbar personalInfo={data!.personalInfo} />
      </div>

      <div className={classes.imageContainer}>
        <Photo imageUrl={data!.personalInfo.imageUrl} />
      </div>

      <div className={classes.homeContainer}>
        <Home
          personalInfo={data!.personalInfo}
          aboutMe={data!.aboutMe}
          skills={data!.skills}
          projects={data!.projects}
          // experience={data.experience}
          contactInfo={data!.contactInfo}
        />
      </div>
    </div>
  );
}
