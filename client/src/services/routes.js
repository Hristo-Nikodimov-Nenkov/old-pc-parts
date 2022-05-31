import {generatePath} from "react-router-dom";

export const homeLink = {
   url: "/",
   text: "Home",
   icon: ""
}


export const routes = [
   {
      path: "/",
      links: [
         {
            url: "/motherboards",
            text: "Motherboards",
            icon: ""
         },
         {
            url: "/processors",
            text: "Processors",
            icon: ""
         }
      ]
   },
   {
      path: "/about",
      links: [homeLink]
   },
   {
      path: "/motherboards/:id",
      links: [
         {
            url: "/motherboards/:id/specifications",
            text: "Specifications",
            icon: ""
         },
         {
            url: "/motherboards/:id/processors",
            text: "Processors",
            icon: ""
         }
      ]
   },
   {
      path: "/processors",
      links: []
   },
   {
      path: "/processors/:id",
      links: [
         {
            url: "/processors/:id/listings",
            text: "Listings",
            icon: ""
         }
      ]
   }
]

export const getRouteLinks = (links, params) => {
   return links.map(l => ({
      ...l,
      url: generatePath(l.url, params)
   }));
}

const routesService = {
   homeLink,
   routes,
   getRouteLinks,
}

export default routesService;