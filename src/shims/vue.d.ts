declare module "*.vue" {
  import { defineComponent, DefineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
