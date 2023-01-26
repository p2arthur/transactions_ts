//Creating a new decorator to return the element from a document.querySelector("selector")
export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    const getter = function () {
      const element = document.querySelector(selector);
      return element;
    };
  };
}
