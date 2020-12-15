import React, { useEffect, useState, useRef } from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { getEvents, getCategories, ApiToken } from "../api";
import Select from "react-select";
import { ColorRange, ColorsObject } from "../colors";
import { Position } from "deck.gl";
import Slider from "../UI/Slider";
import NavController from "../UI/NavController";
import { HeatmapLayerProps } from "@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer";

/*
Eonet API Types
* */
interface EonetEvent {
  id: string;
  title: string;
  description: string | null;
  link: string;
  closed: string | null;
  categories: EonetCategories[];
  sources: EonetSources[];
  geometry: EonetGeometry[];
}

interface EonetCategories {
  id: string;
  title: string;
}
interface EonetSources {
  id: string;
  url: string;
}

interface EonetGeometry {
  magnitudeValue: number;
  magnitudeUnit: string;
  date: string;
  type: string;
  coordinates: [number, number];
}

/*
Component Types
* */
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

export const DeckGlMapbox = () => {
  const [viewPort, setViewPort] = useState<viewPort>({
    longitude: -77.0364,
    latitude: 38.8951,
    zoom: 1,
    pitch: 0,
    bearing: 0
  });
  const [layer, setLayer] = useState<
    HeatmapLayer<Position, HeatmapLayerProps<Position>> | boolean
  >(false);
  const [past, setPast] = useState<number>(0);
  const [categories, setCategories] = useState<categories[]>([]);
  const [selectCategory, setSelectCategory] = useState<categories | null>(null);

  const mapRef = useRef(null);
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

  useEffect(() => {
    if (selectCategory) {
      getEvents(selectCategory.value, past)
        .then(({ events }) => {
          const data = events
            .flatMap((event: EonetEvent) => event.geometry)
            .map((e: EonetGeometry) => e.coordinates);
          setLayer(
            new HeatmapLayer({
              data,
              colorRange:
                (ColorsObject[selectCategory.value] as ColorRange) ||
                (ColorsObject["default"] as ColorRange),
              getPosition: (d: Position) => d,
              getWeight: d => 10
            })
          );
        })
        .catch(err => alert(err));
    }
  }, [selectCategory, past]);

  const handleChange = (value: any) => {
    setSelectCategory(value);
  };

  const handleViewPortChange = (view: viewPort) => {
    setViewPort({ ...viewPort, ...view });
  };
  return (
    <>
      <Slider
        onAfterChange={past => setPast(past as number)}
        min={1}
        max={365}
      />
      <Select
        value={selectCategory}
        onChange={handleChange}
        options={categories}
      />
      <ReactMapGL
        ref={mapRef}
        {...viewPort}
        transitionDuration={800}
        transitionInterpolator={new FlyToInterpolator()}
        width="100%"
        height="100%"
        mapStyle={`mapbox://styles/mapbox/dark-v10`}
        onViewportChange={handleViewPortChange}
        mapboxApiAccessToken={ApiToken}
      >
        <NavController onViewportChange={handleViewPortChange} />
        <DeckGL
          viewState={viewPort}
          layers={[
            layer as HeatmapLayer<Position, HeatmapLayerProps<Position>>
          ]}
        />
      </ReactMapGL>
    </>
  );
};
