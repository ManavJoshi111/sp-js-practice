const obj = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj.x();
