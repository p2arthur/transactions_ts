//Creating a decorator for loging the executionTime
export function logExecutionTime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const originalMethodReturn = originalMethod.apply(this, args);
      const t2 = performance.now();

      //call the original method
      console.log(
        `${propertyKey}, execution time: ${(t2 - t1) / 1000} seconds`
      );
      return originalMethodReturn;
    };

    return descriptor;
  };
}
