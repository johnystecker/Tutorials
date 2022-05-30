function Required(target: object, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get() {
        throw new Error(`Attribute ${propertyKey} is required`);
      },
      set(value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: true,
          configurable: true,
        });
      },
      configurable: true
    });
  }