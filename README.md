# Ng5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Angular 5 Kick Start
1.	Install Node JS
2.	Check node -v in command line
3.	Installing Angular CLI: npm install @angular/cli -g
4.	Once installed check ng -v
5.	Create a new Project : ng new <project-name> --style=scss --routing
6.	Cd <project-name>
7.	Create a new Component: ng generate component <component-name>
a.	Short hand command -> ng g c <component-name>
8.	Create a new Service: ng generate service <service-name>  (ng g s <service-name>)
a.	Services are mainly to share common code b/w components
b.	Making http calls
9.	Build & Deployment:
a.	Normal Build: ng build
b.	Production Build : ng build --prod (Prod build size is less and Fast comparatively.)
c.	Deploying to domain: ng build –prod –base-href=”myURL”
d.	Deploying through Git Hub pages:
Npm install -g angular-cli-ghpages



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
