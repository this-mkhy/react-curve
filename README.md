# React Curve

This is react-curve, open source project where I can share and start creating small UI component in the way I understood the concepts to build large scale projects .

This is a work in progress and I don't think it will ever finish. I will continue updating it with examples and tricks.

## Content:

Live Preview: [React-Curve](https://this-react-curve.vercel.app/)

### Week 1 - Counter App

**Read: [how-to-code-counter](https://dev.to/this_mkhy/week-1-counter-app-2n1n)**

![counter-app](https://github.com/this-mkhy/react-curve/blob/master/src/assets/counter.gif?raw=true)

### Week 2 - Colors App

**Read: [How-to-map-over-a-list-of-colors](https://dev.to/this_mkhy/week-2-colors-app-4394)**

![colors-app](https://github.com/this-mkhy/react-curve/blob/master/src/assets/colors.gif?raw=true)

### Week 3 - Toggle App

**Read: [how-to-toggle](https://dev.to/this_mkhy/week-3-toggle-app-bo8)**

![toggle-app](https://github.com/this-mkhy/react-curve/blob/master/src/assets/toggle.gif?raw=true)

### Week 4 - Handle Input App

**Read: [how-to-handle-input](https://dev.to/this_mkhy/week-4-handle-input-app-2m7n)**

![handle-input-app](https://github.com/this-mkhy/react-curve/blob/master/src/assets/handleInput.gif?raw=true)

### Week 5 - Disable Button App

**Read: [how-to-disable-button](https://dev.to/this_mkhy/week-5-disable-button-app-2fi2)**

![disable-button-app](https://github.com/this-mkhy/react-curve/blob/master/src/assets/disableBtn.gif?raw=true)

### Week 6 - Sum Two Numbers App

**Read: [how-to-sum-two-numbers](https://dev.to/this_mkhy/week-6-sum-two-numbers-app-1800)**

![sum-two-numbers-app](https://i.imgur.com/rWOzyea.gif)

### Week 7 -  Todo Add App

***Read: [how-to-add-to-todo-list](https://dev.to/this_mkhy/week-7-todo-add-app-45lc)**
![todo-add-app](https://i.imgur.com/8eXcruN.gif)

### Week 8 -  Todo Delete App

***Read: [how-to-delete-from-todo-list](https://dev.to/this_mkhy/week-8-todo-delete-app-20b5)**
![todo-delete-app](https://i.imgur.com/HULWJgW.gif)

### Week 9 -  Pomodoro Timer

***Read: [how-to-code-the-pomodoro-timer]**
![pomodoro-timer-app](https://i.imgur.com/hhAzBfZ.gif)

## Docker 🐳

[Install](https://docs.docker.com/compose/install/) Docker first if you don't have it on your local PC.

### How to run

This application is using docker compose file to declare and build image.
To run the entire app use the next command in your terminal in the project root directory.

```sh
docker compose up
```

You only need one command to install dependencies and run application. Super easy!

To see running application navigate to http://localhost:8080/

### Additional commands

If you want to keep your terminal free of logs you may use the next command

```sh
docker compose up -d
```

To see logs from the container in the detached mode use

```sh
docker compose logs -f
```

To stop containers use

```sh
docker compose stop
```

To stop and delete containers use

```sh
docker compose down
```

To delete images from your PC use

```sh
docker image rm <image ID>
```

## Contributors

<a align="center" href="https://github.com/this-mkhy/react-curve/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=this-mkhy/react-curve&&max=817" />
</a>
