import Home from "@/pages/index";

import { Product } from "@/types";
import { response } from "@/mocks/courses";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => <Home />;
