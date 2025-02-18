import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnersDetail from "../components/OwnersDetail";
import FinancialCalculator from "../components/FinancialCalculator";

const ListingDetail = () => {
  const { id } = useParams();

  const [carDetail, setCarDetail] = useState([]);

  useEffect(() => {
    GetCarDetail();
  }, []);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);

    setCarDetail(resp[0]);
  };

  return (
    <div>
      <Header />

      {/* Header detail component */}

      <div className="p-10 md:px-20">
        <DetailHeader carDetail={carDetail} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] w-full mt-1 gap-5 px-10 md:px-20">

        {/* Left - Image Gallery and Details (60%) */}

        <div className="md:col-span-1">

          {/* Image gallery */}

          <ImageGallery carDetail={carDetail} />

          {/* Description */}

          <Description carDetail={carDetail} />

          {/* Features list */}

          <Features features={carDetail?.features} />

          {/* financial calculator */}

          <FinancialCalculator carDetail={carDetail} />

        </div>

        {/* Right - Pricing and Other Details (40%) */}

        <div className="md:col-span-1">

          {/* Pricing */}

          <Pricing carDetail={carDetail} />

          {/* Car properties */}

          <Specification carDetail={carDetail}/>

          {/* Owner details */}

          <OwnersDetail carDetail={carDetail}/>

        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
