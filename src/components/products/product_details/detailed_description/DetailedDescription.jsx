import { Accordion, Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import DetailAccordion from "./DetailAccordion";

const DetailedDescription = ({
  name,
  description,
  benefits,
  storageAndUsage,
  policy,
  otherInfo,
}) => {
  // console.log("policy",typeof policy);
  return (
    <Box mt="10">
      <Text fontSize={"2xl"} fontWeight={500}>
        {name || "Wayfarer Classic"}
      </Text>
      <Divider></Divider>
      <Accordion defaultIndex={[0]} allowMultiple>
        <DetailAccordion
          heading={"About The Product"}
          description={
            description ||
            "Guavas are rich in dietary fiber and vitamin C, with moderate levels of folic acid (nutrition table). Low in food energy per typical serving, and with few essential nutrients, a single common guava (P. guajava) fruit contains 257% of the Daily Value (DV) for vitamin C (table). Nutrient content varies across guava cultivars. Although the strawberry guava (P. littorale var. cattleianum) has only 39% of the vitamin C in common varieties, its content in a 100 gram serving (90 mg) still provides 100% of the DV."
          }
        />
        <DetailAccordion
          heading={"Benefits"}
          description={
            benefits ||
            "Guava is a traditional remedy for a number of ailments. Preliminary research suggests that compounds in guava leaf extract may have a positive effect on a range of illnesses and symptoms, including menstrual cramps, diarrhea, the flu, type 2 diabetes, and cancer. However, scientists need to carry out further studies in humans to confirm and better understand these findings."
          }
        />
        <DetailAccordion
          heading={"Storage and Uses"}
          description={
            storageAndUsage ||
            "The optimum temperature for storage of guava fruits was 6°C and 90-95% RH for maintaining highly acceptable sensory quality. At this temperature the fruits had attractive colour, pleasant flavour and acceptable quality and can be stored up to 2-3 weeks with post-storage shelf-life of 3 days at 20-21°C and 65-70% RH"
          }
        />
        <DetailAccordion
          heading={"Other Product Info"}
          description={
            otherInfo ||
            "EAN Code: 10000150 Country of origin: India.Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071.Best before 3 days from delivery date For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Supermarket Grocery Supplies Pvt Ltd. No7, Service Road, Domlur 100 Feet Road, Indiranagar, Bangalore 560071. | Email: customerservice@bigbasket.com"
          }
        />
        {policy&&<DetailAccordion
          heading={"Variable weight policy"}
          description={
            "Please note that the item(s) in this product may vary slightly in size and weight. Hence, the actual weight of the product delivered can have a small variance. You will be billed based on the actual weight during order processing."
          }
        />}
      </Accordion>
    </Box>
  );
};

export default DetailedDescription;
