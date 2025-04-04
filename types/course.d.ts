type CoursesType = {
    _id: any;
    name: string;
    description: string;
    categories: string;
    price: number;
    estimatedPrice?: number;
    thumbnail: {
      public_id: string | any;
      url: string | any;
    };
    tags: string;
    level: string;
    demoUrl: string;
    benefits: BenefitType[];
    prerequisites: PrerequisiteType[];
    reviews: ReviewType[];
    courseData: CourseDataType[];
    ratings?: number;
    purchased: number;
  };