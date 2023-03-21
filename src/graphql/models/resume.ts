export interface IResumeEntity {
  resume: {
    data: {
      attributes: {
        workExperience?: IWorkExperienceEntity[];
        references?: IReferencesEntity[];
        projects?: IProjectsEntity[];
        awards?: IAwardsEntity[];
      };
    };
  };
}

export interface IHomepageEntity {
  resume: {
    data: {
      attributes: {
        workExperience?: IWorkExperienceEntity[];
        projects?: IProjectsEntity[];
      };
    };
  };
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
  project_url: string;
  description: string;
}

export interface IReferencesEntity {
  id: string;
  name: string;
  email: string;
  title: string;
}
