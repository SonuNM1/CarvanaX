import { pgTable, serial, varchar, json, integer } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing',{
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    condition: varchar('condition').notNull(),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    model: varchar('model').notNull(),
    maker: varchar('maker').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: varchar('mileage').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    vin: varchar('vin'),
    offerType: varchar('offerType'),
    listingDescription: varchar('listingDescription'),
    features:json('features'),
    createdBy: varchar('createdBy').notNull().default('sonu.mahto362000@gmail.com'), 
    userName: varchar('userName').notNull().default('Sonu NM'),
    userImageUrl: varchar('userImageUrl').default('https://i.ibb.co/pvHsTMHx/insta.jpg'),
    postedOn: varchar('postedOn')
})

export const CarImages = pgTable('carImages', {
    id: serial('id').primaryKey() ,
    imageUrl: varchar('imageUrl').notNull(), 
    carListingId: integer('carListingId').notNull().references(()=>CarListing.id)
})