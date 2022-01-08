import { createServer, Model, RestSerializer } from "miragejs";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      user: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("users");
    },

    seeds(server) {
      server.create("user", {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/Heart_Diary_1_1024x1024.jpg?v=1582307003",
        name: "Heart Laser Cut Wooden Diary",
        Quantity: 1,
        description:" Get this diary as a birthday gift for a friend who loves to write and loves things a little on the cheesy side.",
        price: 599
      });
      server.create("user", {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/Me_Plus_You_Notebook2_1024x1024.jpg?v=1581946279",
        name: "Heartilicious Diary & Pen Set",
        Quantity: 1,
        description:" Heartilicious Diary & Pen Set to keep your heart company and your memories safe.",
        price: 650
      });

      server.create("user", {
        id: 3,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/ZodiacSignNotebook7_1024x1024.jpg?v=1607326263",
        name: "Sun Sign Notebook",
        Quantity: 1,
        description:"Flaunt your sun sign with pride with these horoscope notebooks",
        price: 265
      });

      server.create("user", {
        id: 4,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/ElephantRGB_1024x1024.jpg?v=1615533361",
        name: "Today I Will Fly Notebook",
        Quantity: 1,
        description:"Makes for a great birthday gift for a friend who loves all things cute and unique.",
        price: 350
      });
      server.create("user", {
        id: 5,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/chaseyourdreams2_1024x1024.jpg?v=1615533670",
        name: "Chase Your Dreams Notebook",
        Quantity: 1,
        description:"A fun place to house all your creative doodles and lunch plans.",
        price: 550
      });

      server.create("user", {
        id: 5,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/chaseyourdreams2_1024x1024.jpg?v=1615533670",
        name: "Chase Your Dreams Notebook",
        Quantity: 1,
        description:"A fun place to house all your creative doodles and lunch plans.",
        price: 550
      });
      server.create("user", {
        id: 6,
        image: "https://cdn.shopify.com/s/files/1/1305/2183/products/Idon_tcareI_mUnicorn1_1024x1024.jpg?v=1615543338",
        name: "Carefree Unicorn Notebook",
        Quantity: 1,
        description:"NO WORRIES FOR I'M MAGICAL!",
        price: 250
      });
      server.create("user", {
        id: 7,
        image: "https://cdn.shopify.com/s/files/1/1431/0846/products/POPPEG29_1_2400x.jpg?v=1598587372",
        name: "Rainbow Unicorn Pen-Set Of 4",
        Quantity: 1,
        description:" Set Of 4 Alluring Colours With Detachable Unicorn Caps!",
        price: 179
      });
      server.create("user", {
        id: 8,
        image: "https://cdn.shopify.com/s/files/1/1431/0846/products/PSLG1012_2400x.png?v=1594284463",
        name: "Feather Pen",
        Quantity: 1,
        description:"Simply Draw Or Doodle As Per Your Mood.",
        price: 75
      });
      server.create("user", {
        id: 9,
        image: "https://cdn.shopify.com/s/files/1/1431/0846/products/POPPEG304A_2400x.jpg?v=1610268376",
        name: "Ice-Cream Pen-Set Of 3",
        Quantity: 1,
        description:"Pretty, Quirky, And Beautiful Pens To Add Happiness",
        price: 149
      });



      


    }
  });
}
