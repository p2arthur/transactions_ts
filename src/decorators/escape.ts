export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    let originalMethodReturn = originalMethod.apply(this, args);

    if (typeof originalMethodReturn == "string") {
      console.log(
        `@escape in action for the class ${this.constructor.name} for the method: ${propertyKey}`
      );
      originalMethodReturn.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return originalMethodReturn;
  };

  return descriptor;
}
