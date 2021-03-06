const api = require('./api');

module.exports = {
  getBasicData: async courseId => {
    try {
      const response = await api.get(`courses/${courseId}`);
      const { data } = response;
      return data;
    } catch (error) {
      console.error(`could not get`, error);
      return null;
    }
  },
  createCourse: async (data, access_token) => {
    try {
      const {
        name,
        description,
        languages,
        level: { value },
        user_id
      } = data;
      let courseId;
      const response = await api
        .post(
          'courses',
          {
            name,
            description,
            level: value,
            personId: user_id,
            course_photo: 'string'
          },
          { params: { access_token } }
        )
        .then(_response => {
          const {
            data: { id }
          } = _response;
          courseId = id;
          return _response;
        })
        .catch(error => {
          console.log('error creando curso', error);
          courseId = 0;
        });

      // languages.forEach(async language => {
      await api.post(
        'languages_courses',
        { languageId: languages.id, courseId },
        { params: { access_token } }
      );
      // });

      return response;
    } catch (error) {
      console.log('error', error);
    }
  },
  getById: async id => {
    try {
      const courseQuery = await api.get(`courses/${id}`);
      const { data } = courseQuery;
      return data;
    } catch (error) {
      return new Error('No Course');
    }
  },
  createStage: async (course_id, stageData, access_token) => {
    try {
      const courseClassQuant = await api.get(
        `courses/${course_id}/stages/count`
      );
      const { count } = courseClassQuant.data;

      const stageDataStructure = {
        content: stageData,
        number: count + 1
      };
      return await api
        .post(`courses/${course_id}/stages`, stageDataStructure, {
          params: { access_token }
        })
        .then(response => response)
        .catch(error =>
          console.log('error creating stage', error.response.status)
        );
    } catch (error) {
      return new Error('Cannot create stage');
    }
  },
  updateStage: async (course_id, stage_id, stageData, access_token) => {
    try {
      const stageDataStructure = {
        content: stageData
      };
      return await api
        .put(`courses/${course_id}/stages/${stage_id}`, stageDataStructure, {
          params: { access_token }
        })
        .then(response => response)
        .catch(error =>
          console.log('error updating stage', error.response.status)
        );
    } catch (error) {
      return new Error('Cannot update stage');
    }
  },
  deleteStage: async (course_id, stage_id, access_token) => {
    try {
      const stageToDelete = await api
        .get(`courses/${course_id}/stages/${stage_id}`)
        .then(({ data }) => data);

      const stagesToUpdate = await api
        .get(
          `courses/${course_id}/stages?filter[where][number][gt]=${stageToDelete.number}`
        )
        .then(({ data }) => data);

      stagesToUpdate.map(async stageToUpdate => {
        console.log('stageToUpdate', stageToUpdate);
        await api.put(
          `courses/${course_id}/stages/${stageToUpdate.id}`,
          {
            number: stageToUpdate.number - 1
          },
          {
            access_token
          }
        );
      });

      return await api
        .delete(`courses/${course_id}/stages/${stage_id}`, {
          params: { access_token }
        })
        .then(response => response)
        .catch(error =>
          console.log('error deleting stage', error.response.status)
        );
    } catch (error) {
      return new Error('Cannot create stage');
    }
  },
  getStageById: async (course_id, stage_id) => {
    try {
      const stageById = await api.get(
        `/courses/${course_id}/stages/${stage_id}`
      );
      const { data } = stageById;
      return data;
    } catch (error) {
      return new Error('No Stage');
    }
  },
  changeState: async (course_id, state, access_token) => {
    try {
      return await api.patch(
        `/courses/${course_id}`,
        { state },
        { params: { access_token } }
      );
    } catch (error) {
      return new Error('No Stage');
    }
  },
  getCoursesByLanguageName: async name => {
    try {
      const languageId = await api
        .get(`languages?filter={"where":{"name":"${name}"}}`)
        .then(({ data }) => data[0].id)
        .catch(() => 1);

      console.log(name);
      const courses = await api
        .get(`languages/${languageId}/courses?filter[limit]=15`)
        .then(response => response.data);

      return courses;
    } catch (error) {
      return new Error('No Stage');
    }
  }
};
