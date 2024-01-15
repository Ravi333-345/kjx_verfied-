
import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carasoul";
const ImageSlider = () => {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://i.ibb.co/w0mP8kT/project1.png" onClick="https://www.travoticholidays.com/" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://i.ibb.co/9YJNzqC/project5.png" onClick="https://timesmedia.co.in/ec/public/" />
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card imagen="https://i.ibb.co/9G3LyrC/project7.png" onClick="https://jobseekers.co.nz/" />
      )
    },

  ];

  //   let cards = [
  //     {
  //       key: uuidv4(),
  //       content: (
  //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
  //       )
  //     },
  //     {
  //       key: uuidv4(),
  //       content: (
  //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
  //       )
  //     },
  //     {
  //       key: uuidv4(),
  //       content: (
  //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
  //       )
  //     },
  //     {
  //       key: uuidv4(),
  //       content: (
  //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
  //       )
  //     },
  //     {
  //       key: uuidv4(),
  //       content: (
  //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
  //       )
  //     }
  //   ];

  return (
    <div >
      < Carousel

        cards={cards}
        height="600px"
        width="100%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div >
  )
}

export default ImageSlider;