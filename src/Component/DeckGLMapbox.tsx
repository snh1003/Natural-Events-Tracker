import React, { useEffect, useState } from "react";
import ReactMapGL, {
  _MapContext as MapContext,
  StaticMap,
  NavigationControl,
  FlyToInterpolator
} from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { getEvents, getCategories } from "../api";
import ReactSlider from "react-slider";
import Select from "react-select";
import colors from "../colors";
import { useRef } from "react";

interface viewPort {
  longitude: number;
  latitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
}
interface categories {
  value: string;
  label: string;
}
const DeckGlMapbox = () => {
  const [viewprot, setViewprot] = useState<viewPort>({
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 1,
    pitch: 0,
    bearing: 0
  });
  const [layer, setLayer] = useState<unknown>(false);
  const [past, setPast] = useState(0);
  const [categories, setCategories] = useState<categories[]>([]);
  const [selectCategory, setSelectCategory] = useState<categories>(null);

  const mapRef = useRef();

  useEffect(() => {
    getCategories()
      .then(categories =>
        categories.categories.map((obj: { id: string; title: string }) => {
          return { value: obj.id, label: obj.title };
        })
      )
      .then(categories => setCategories(categories));
    setLayer(new HeatmapLayer({}));
  }, []);
  return <div></div>;
};
