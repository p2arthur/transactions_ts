export function inspectMethod() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`---Méthod: ${propertyKey}`);
      console.log(`------Parameters: ${JSON.stringify(args)}`);
      const originalMethodReturn = originalMethod.apply(this, args);
      console.log(`------Return: ${JSON.stringify(originalMethodReturn)}`);

      return originalMethodReturn;
    };

    return descriptor;
  };
}
