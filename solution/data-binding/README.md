# Angular data-bindings practice

## First steps
- Open the cloned directory and set the project:
- `cd <repo-name>`
- `code . -r`
- Install dependencies:
- `npm i`
- Start the Angular Development Server:
- `npm start`

## Tasks
- Important! Use data-bindins, do not fix outputs in the files!
- Open the [sample.JPG](sample.JPG) file.
- Modify the code in the [app.component.html](src/app/app.component.html) file to get the result you see in the picture. Do not work in the .ts file!
- Modify the code in the [pricing-page.component.ts](src/app/pricing-page/pricing-page.component.ts) file to get the result you see in the picture. Do not work in the .html file!
- Fill in the missing logPackage method in the class based on the comment.

## Testing
- Open the terminal in the work-directory and run this command:
- `npm test`
- Work on the app while all tests are passed.
- You can test components seperately: `npm run test:04` and `npm run test:05`

## Help
> If you want to show the value of a variable or a method: 
> `{{ name }}` a name változó a kapcsolódó osztályból jön  
  
> If you want to modify a property of an HTML element:
> `[title]="title"` a title változó a kapcsolódó osztályból jön  
  
> If you want to call a method based on user activities:
> `(click)="doSomething()"`
