import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./pages/Loading/Loading";
import ErrorPage from "./pages/Error/Error";
import eye from "./media/eye.jpg";
import arm from "./media/arm.jpg";
import face from "./media/face2.jpg";
import leg from "./media/leg.jpg";
import data_analysis from "./media/data-analysis.jpg";
import robotics from "./media/robotics.jpg";
import biology from "./media/biology.jpg";
import "./App.scss";

const LoadableHomePage = Loadable({
  loader: () => import("./pages/Home/Home"),
  loading: Loading
});

const LoadableAboutPage = Loadable({
  loader: () => import("./pages/About/About"),
  loading: Loading
});

const LoadableAchievementPage = Loadable({
  loader: () => import("./pages/Achievements/Achievements"),
  loading: Loading
});

const LoadableContactPage = Loadable({
  loader: () => import("./pages/Contact/Contact"),
  loading: Loading
});

class App extends Component {
  state = {
    products: [
      {
        img: eye,
        img_alt: "functional_eye",
        name: "NEME-1000",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas quis quisquam enim nihil est dolorum ipsa! Consequuntur, excepturi fugiat quibusdam, dolorem ex reprehenderit nesciunt perferendis veniam adipisci minus asperiores?",
        link: "/achievements"
      },
      {
        img: arm,
        img_alt: "functional_arm",
        name: "NCA-4000",
        description:
          "Iusto id sunt aspernatur hic veniam fuga odio facere minus excepturi veritatis suscipit nam ipsum, modi repudiandae provident magnam dolore accusamus dolorem recusandae, exercitationem, architecto voluptas eos itaque. Hic, voluptatum?",
        link: "/achievements"
      },
      {
        img: leg,
        img_alt: "functional_leg",
        name: "NCL-3000",
        description:
          "Earum deleniti, beatae necessitatibus ea dolores neque quaerat ratione tenetur pariatur rem corporis blanditiis accusantium laudantium corrupti est quae sit nobis adipisci. Non sed iste repudiandae totam cupiditate dolore ex.",
        link: "/achievements"
      },
      {
        img: face,
        img_alt: "functional_face",
        name: "AHFS-1000",
        description:
          "Excepturi, consectetur! Impedit earum beatae optio sapiente, eligendi repudiandae molestias deleniti mollitia, amet nostrum corporis, consectetur sunt. Voluptatum aspernatur, nesciunt corrupti officiis debitis atque. Accusantium porro ipsa vel quia soluta?",
        link: "/achievements"
      }
    ],
    departments: [
      {
        img: data_analysis,
        img_alt: "data_department",
        name: "data analysis",
        description:
          "Quas vero, magnam maxime libero, quidem nulla dolorum illum doloribus repudiandae quae eveniet eum quibusdam fugit corrupti! Repellat porro ex veritatis dolorum eligendi dolores a similique nam, eaque sed suscipit! Aperiam a nisi maxime harum? Dolor minima consequatur facere temporibus officiis similique ad quae fuga."
      },
      {
        img: robotics,
        img_alt: "robotics_department",
        name: "robotics",
        description:
          "Quis ipsum laboriosam veniam? Corporis aspernatur veniam error quam consectetur, culpa asperiores temporibus nemo delectus voluptatum dolores voluptatem! Sint dolorem, facilis praesentium, aut consectetur, rerum illum hic accusantium esse architecto perferendis eaque possimus corporis aspernatur? Ab id quaerat voluptatibus ducimus officia repellendus iste modi. Similique?"
      },
      {
        img: biology,
        img_alt: "biology_department",
        name: "biology",
        description:
          "Nam ullam laboriosam eveniet dolorum beatae modi iure corporis sunt fugiat. Rerum amet voluptatum error in id cupiditate accusantium ratione nesciunt ipsa recusandae velit voluptas, voluptatibus enim, dicta facilis quaerat nulla? Dignissimos, molestias minima alias natus autem fugiat magnam tempore ab vitae suscipit exercitationem explicabo."
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={LoadableHomePage} />
            <Route
              path="/achievements"
              render={({ props }) => (
                <LoadableAchievementPage
                  {...props}
                  products={this.state.products}
                />
              )}
            />
            <Route
              path="/about"
              render={({ props }) => (
                <LoadableAboutPage
                  {...props}
                  departments={this.state.departments}
                />
              )}
            />
            <Route path="/join-us" component={LoadableContactPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
