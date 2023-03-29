const collisions =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 2945, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 0, 2945, 2945, 2945, 0, 2945, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 2945, 0, 2945, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 2945, 0, 0, 0, 2945, 0, 2945, 0, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945,
    0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 2945, 2945, 2945, 0, 0, 2945, 2945, 0, 0, 2945, 0,
    0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 2945, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 2945,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 2945, 2945, 2945, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 2945, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 2945, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 2945, 0, 2945, 0, 0, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2945, 2945, 2945, 2945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]