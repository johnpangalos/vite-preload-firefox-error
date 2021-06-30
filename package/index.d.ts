type MyFunc = () => void;

declare module "my-package" {
  const myFunc: MyFunc;
  export default myFunc;
}
