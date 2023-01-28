/**
 * @version 1.0.0
 * @file 원티드 프리온보딩 프론트엔드 챌린지 2023년 2월 챌린지, TypeScript 사전과제 - todo 문서 
 * @author suji park <lzns960@gmail.com>
 * @copyright suji park 2023.01
 * @see <a href="https://github.com/lzns960/wanted-pre-onboarding-challenge-fe-2" >https://github.com/lzns960/wanted-pre-onboarding-challenge-fe-2 </a>
 */

/** 
 * Create a Todo List
 * @typedef {Object} Todo Todo Data
 * @property {number} id Todo id
 * @property {string} content Todo content
 * @property {boolean} isDone Todo is Done
 * @property {string} category Todo category
 * @property {tag[]} [tags] Todo tag
 * */

/**
 * Create a Tags
 * @typedef {Object} Tag Tag Data
 * @property {number} id Tag id
 * @property {string} name tag name
 */

  /**
   * CREATE : 할일을 추가할 수 있다. [내용(content)없이 추가 불가능]
   * @param {Object} todo 
   * @param {string} todo.content {@link Todo}.content
   * @param {boolean} todo.isDone {@link Todo}.isDone
   * @param {string} todo.category {@link Todo}.category
   * @param {string[]} [todo.tags] {@link Todo}.tags
   */
  function createTodo(todo) {
    // 내용(content) 없을경우 예외처리 
  }
  
  /**
   * READ : 모든 할일을 조회 할 수 있다.
   * @returns {Todo[]}
   */
  function readAllTodo() {}
  
  /**
   * READ : ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} todoId  {@link Todo}.id
   * @returns {Todo} 
   */
  function readTodo(todoId) {}
  
  /**
   * UPDATE : ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {number} todoId {@link Todo}.id
   * @param {Object} todo
   * @param {string} todo.content {@link Todo}.content
   * @param {boolean} todo.isDone {@link Todo}.isDone
   * @param {string} todo.category {@link Todo}.category
   * @param {string[]} [todo.tags] {@link Todo}.tags
   */
  function updateTodo(todoId,todo) {}
  
  /**
   * UPDATE : 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} tagId {@link Tag}.id
   * @param {string} name {@link Tag}.name
   */
  function updateTag(tagId,name) {}
  
  /**
   * DELETE : ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {number} todoId {@link Todo}.id
   */
  function deleteTodo(todoId) {}
  
  /**
   * DELETE : 모든 할 일을 제거할 수 있다.
   */
  function deleteAllTodo() {}
  
  /**
   * DELETE : 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} todoId {@link Todo}.id
   * @param {number} tagId {@link Tag}.id
   */
  function deleteTag(todoId,tagId) {}
  
  /**
   * DELETE : 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {number} todoId {@link Todo}.id
   */
  function deleteAllTag(todoId) {}