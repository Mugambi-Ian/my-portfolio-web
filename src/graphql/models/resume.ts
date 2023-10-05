export interface IResumeEntity {
  resume: {
    data: {
      attributes: IResumeAttributesEntity;
    };
  };
}

export interface IResumeAttributesEntity {
  workExperience?: IWorkExperienceEntity[];
  references?: IReferencesEntity[];
  projects?: IProjectsEntity[];
  education?: IEducationEntity;
  awards?: IAwardsEntity[];
}

export interface IHomepageEntity {
  resume: {
    data: {
      attributes: IHomepageAttributesEntity;
    };
  };
}
export interface IHomepageAttributesEntity {
  workExperience?: IWorkExperienceEntity[];
  projects?: IProjectsEntity[];
}
export interface IWorkExperienceEntity {
  id: string;
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  location: string;
  roles?: IRolesEntity[];
}
export interface IRolesEntity {
  id: string;
  department: string;
  project_url: string;
  tech_stack: ITechStack;
  deparment_roles: IDeparmentRoles;
}
export interface ITechStack {
  data?: {
    id: string;
    attributes: {
      techStack: string;
    };
  }[];
}

export interface IDeparmentRoles {
  data?: {
    id: string;
    attributes: {
      role: string;
    };
  }[];
}

export interface IAwardsEntity {
  id: string;
  title: string;
  award: string;
  date: string;
  description: string;
}

export interface IProjectsEntity {
  id: string;
  title: string;
  short_description: string;
  long_description: string;
  project_url: string;
  project_cover?: string;
  links: {
    id: string;
    link: string;
    type: string;
    name: string;
  }[];
}

export interface IReferencesEntity {
  id: string;
  name: string;
  email: string;
  title: string;
}

export interface IEducationEntity {
  start: string;
  school: string;
  course: string;
  end_date: string;
}
