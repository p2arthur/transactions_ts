//Creating a decorator with a parameter for loging the executionTime in seconds or miliseconds
export function logExecutionTime(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divider = !inSeconds ? 1 : 1000;
      let unity = !inSeconds ? "miliseconds" : "seconds";
      const t1 = performance.now();
      const originalMethodReturn = originalMethod.apply(this, args);
      const t2 = performance.now();

      //call the original method
      console.log(
        `${propertyKey}, execution time: ${(t2 - t1) / divider} ${unity}`
      );
      return originalMethodReturn;
    };

    return descriptor;
  };
}
