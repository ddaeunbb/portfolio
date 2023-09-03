import { Params } from 'react-router-dom';
import { ProjectType } from 'src/page-contents/projectType';

export const projectLoader = async (
  params: Params<string>,
): Promise<ProjectType | null> => {
  const { id } = params;
  try {
    const module = await import(`../page-contents/project${id}.ts`);
    return module.default;
  } catch (error) {
    console.error('Error loading project:', error);
    return null;
  }
};
