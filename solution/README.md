# Practices

## Setup the project
- Set the current directory as the workspace: `code . -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/products
- We will only work on the product page.

## Tasks
- Open [ProductComponent](src/app/page/product/product.component.ts)
- Solve all todos in the file.
- Open [ProductComponent HTML](src/app/page/product/product.component.html)
- Solve all todos in the file.

## Testing
- `npm test`

## Further helps

### Creating signals
- To create a variable with signal type, you can use the following syntax:
- `sum = signal<number>(0)>`

### Computed properties
- Computed function creates a new signal based on an existing:
```typescript
computed(() => {
  return this.list().filter(item => item.price > 0).length;
});
```

### Using effects
- The Effect function runs whenever the watched signal is updated.
The following Effect watches the list and sets the listQty:
```typescript
effect(() => {
  if (this.list()) {
    this.listQty = this.list().length;
  }
  this.listQty = 0;
});
```

### Updating a signal
- The easiest way to update the value of a signal is the set() method:
- `sum.set(20);`
- You can use the update method to update the value based on the previous.
- The following code increases the value of the sum signal by 1:
- `sum.update( amount => amount + 1 );`
