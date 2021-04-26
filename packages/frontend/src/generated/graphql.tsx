import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Section = {
  __typename?: 'Section';
  id: Scalars['Float'];
  name: Scalars['String'];
  tasks: Array<Task>;
  order: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type Task = {
  __typename?: 'Task';
  id: Scalars['Float'];
  content: Scalars['String'];
  section: Section;
  order: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TaskDto = {
  __typename?: 'TaskDto';
  id: Scalars['Float'];
  content: Scalars['String'];
  order: Scalars['Float'];
};

export type GetTaskType = {
  __typename?: 'GetTaskType';
  id: Scalars['Float'];
  content: Scalars['String'];
  section: Scalars['Float'];
  order: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getTasks: Array<GetTaskType>;
  getSections: Array<Section>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: TaskDto;
  updateTaskContent: TaskDto;
  deleteTask: Scalars['Boolean'];
  changeTaskOrder: Array<TaskDto>;
  createSection: Section;
  updateSectionName: Section;
};


export type MutationCreateTaskArgs = {
  newData: TaskInput;
};


export type MutationUpdateTaskContentArgs = {
  newData: TaskUpdateInput;
};


export type MutationDeleteTaskArgs = {
  idInfo: IdInfoInput;
};


export type MutationChangeTaskOrderArgs = {
  changeObject: TaskChange;
};


export type MutationCreateSectionArgs = {
  newData: CreateSectionInput;
};


export type MutationUpdateSectionNameArgs = {
  newData: UpdateSectionName;
};

export type TaskInput = {
  content: Scalars['String'];
  sectionId: Scalars['Float'];
};

export type TaskUpdateInput = {
  id: Scalars['Float'];
  content: Scalars['String'];
  sectionId: Scalars['Float'];
};

export type IdInfoInput = {
  sectionId: Scalars['Float'];
  taskId: Scalars['Float'];
};

export type TaskChange = {
  sectionId: Scalars['Float'];
  selectOrder: Scalars['Float'];
  targetOrder: Scalars['Float'];
};

export type CreateSectionInput = {
  name: Scalars['String'];
  order: Scalars['Float'];
};

export type UpdateSectionName = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type CreateSectionMutationVariables = Exact<{
  order: Scalars['Float'];
  name: Scalars['String'];
}>;


export type CreateSectionMutation = (
  { __typename?: 'Mutation' }
  & { createSection: (
    { __typename?: 'Section' }
    & Pick<Section, 'id' | 'name' | 'order'>
  ) }
);

export type UpdateSectionNameMutationVariables = Exact<{
  sectionId: Scalars['Float'];
  title: Scalars['String'];
}>;


export type UpdateSectionNameMutation = (
  { __typename?: 'Mutation' }
  & { updateSectionName: (
    { __typename?: 'Section' }
    & Pick<Section, 'id' | 'name'>
  ) }
);

export type GetSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSectionsQuery = (
  { __typename?: 'Query' }
  & { getSections: Array<(
    { __typename?: 'Section' }
    & Pick<Section, 'id' | 'name' | 'order'>
    & { tasks: Array<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'content' | 'order'>
    )> }
  )> }
);

export type ChangeTaskOrderMutationVariables = Exact<{
  selectOrder: Scalars['Float'];
  targetOrder: Scalars['Float'];
  sectionId: Scalars['Float'];
}>;


export type ChangeTaskOrderMutation = (
  { __typename?: 'Mutation' }
  & { changeTaskOrder: Array<(
    { __typename?: 'TaskDto' }
    & Pick<TaskDto, 'id' | 'content' | 'order'>
  )> }
);

export type CreateTaskMutationVariables = Exact<{
  content: Scalars['String'];
  sectionId: Scalars['Float'];
}>;


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'TaskDto' }
    & Pick<TaskDto, 'id' | 'content' | 'order'>
  ) }
);

export type DeleteTaskMutationVariables = Exact<{
  taskId: Scalars['Float'];
  sectionId: Scalars['Float'];
}>;


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTask'>
);

export type UpdateTaskContentMutationVariables = Exact<{
  id: Scalars['Float'];
  content: Scalars['String'];
  sectionId: Scalars['Float'];
}>;


export type UpdateTaskContentMutation = (
  { __typename?: 'Mutation' }
  & { updateTaskContent: (
    { __typename?: 'TaskDto' }
    & Pick<TaskDto, 'id' | 'content'>
  ) }
);

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = (
  { __typename?: 'Query' }
  & { getTasks: Array<(
    { __typename?: 'GetTaskType' }
    & Pick<GetTaskType, 'id' | 'content' | 'order'>
  )> }
);


export const CreateSectionDocument = gql`
    mutation CreateSection($order: Float!, $name: String!) {
  createSection(newData: {order: $order, name: $name}) {
    id
    name
    order
  }
}
    `;
export type CreateSectionMutationFn = Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>;

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      order: // value for 'order'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateSectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSectionMutation, CreateSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSectionMutation, CreateSectionMutationVariables>(CreateSectionDocument, options);
      }
export type CreateSectionMutationHookResult = ReturnType<typeof useCreateSectionMutation>;
export type CreateSectionMutationResult = Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<CreateSectionMutation, CreateSectionMutationVariables>;
export const UpdateSectionNameDocument = gql`
    mutation UpdateSectionName($sectionId: Float!, $title: String!) {
  updateSectionName(newData: {id: $sectionId, name: $title}) {
    id
    name
  }
}
    `;
export type UpdateSectionNameMutationFn = Apollo.MutationFunction<UpdateSectionNameMutation, UpdateSectionNameMutationVariables>;

/**
 * __useUpdateSectionNameMutation__
 *
 * To run a mutation, you first call `useUpdateSectionNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectionNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectionNameMutation, { data, loading, error }] = useUpdateSectionNameMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateSectionNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSectionNameMutation, UpdateSectionNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSectionNameMutation, UpdateSectionNameMutationVariables>(UpdateSectionNameDocument, options);
      }
export type UpdateSectionNameMutationHookResult = ReturnType<typeof useUpdateSectionNameMutation>;
export type UpdateSectionNameMutationResult = Apollo.MutationResult<UpdateSectionNameMutation>;
export type UpdateSectionNameMutationOptions = Apollo.BaseMutationOptions<UpdateSectionNameMutation, UpdateSectionNameMutationVariables>;
export const GetSectionsDocument = gql`
    query GetSections {
  getSections {
    id
    name
    order
    tasks {
      id
      content
      order
    }
  }
}
    `;

/**
 * __useGetSectionsQuery__
 *
 * To run a query within a React component, call `useGetSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSectionsQuery(baseOptions?: Apollo.QueryHookOptions<GetSectionsQuery, GetSectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSectionsQuery, GetSectionsQueryVariables>(GetSectionsDocument, options);
      }
export function useGetSectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSectionsQuery, GetSectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSectionsQuery, GetSectionsQueryVariables>(GetSectionsDocument, options);
        }
export type GetSectionsQueryHookResult = ReturnType<typeof useGetSectionsQuery>;
export type GetSectionsLazyQueryHookResult = ReturnType<typeof useGetSectionsLazyQuery>;
export type GetSectionsQueryResult = Apollo.QueryResult<GetSectionsQuery, GetSectionsQueryVariables>;
export const ChangeTaskOrderDocument = gql`
    mutation ChangeTaskOrder($selectOrder: Float!, $targetOrder: Float!, $sectionId: Float!) {
  changeTaskOrder(
    changeObject: {selectOrder: $selectOrder, targetOrder: $targetOrder, sectionId: $sectionId}
  ) {
    id
    content
    order
  }
}
    `;
export type ChangeTaskOrderMutationFn = Apollo.MutationFunction<ChangeTaskOrderMutation, ChangeTaskOrderMutationVariables>;

/**
 * __useChangeTaskOrderMutation__
 *
 * To run a mutation, you first call `useChangeTaskOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeTaskOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeTaskOrderMutation, { data, loading, error }] = useChangeTaskOrderMutation({
 *   variables: {
 *      selectOrder: // value for 'selectOrder'
 *      targetOrder: // value for 'targetOrder'
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useChangeTaskOrderMutation(baseOptions?: Apollo.MutationHookOptions<ChangeTaskOrderMutation, ChangeTaskOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeTaskOrderMutation, ChangeTaskOrderMutationVariables>(ChangeTaskOrderDocument, options);
      }
export type ChangeTaskOrderMutationHookResult = ReturnType<typeof useChangeTaskOrderMutation>;
export type ChangeTaskOrderMutationResult = Apollo.MutationResult<ChangeTaskOrderMutation>;
export type ChangeTaskOrderMutationOptions = Apollo.BaseMutationOptions<ChangeTaskOrderMutation, ChangeTaskOrderMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($content: String!, $sectionId: Float!) {
  createTask(newData: {content: $content, sectionId: $sectionId}) {
    id
    content
    order
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      content: // value for 'content'
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($taskId: Float!, $sectionId: Float!) {
  deleteTask(idInfo: {sectionId: $sectionId, taskId: $taskId})
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const UpdateTaskContentDocument = gql`
    mutation UpdateTaskContent($id: Float!, $content: String!, $sectionId: Float!) {
  updateTaskContent(newData: {id: $id, content: $content, sectionId: $sectionId}) {
    id
    content
  }
}
    `;
export type UpdateTaskContentMutationFn = Apollo.MutationFunction<UpdateTaskContentMutation, UpdateTaskContentMutationVariables>;

/**
 * __useUpdateTaskContentMutation__
 *
 * To run a mutation, you first call `useUpdateTaskContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskContentMutation, { data, loading, error }] = useUpdateTaskContentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useUpdateTaskContentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskContentMutation, UpdateTaskContentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskContentMutation, UpdateTaskContentMutationVariables>(UpdateTaskContentDocument, options);
      }
export type UpdateTaskContentMutationHookResult = ReturnType<typeof useUpdateTaskContentMutation>;
export type UpdateTaskContentMutationResult = Apollo.MutationResult<UpdateTaskContentMutation>;
export type UpdateTaskContentMutationOptions = Apollo.BaseMutationOptions<UpdateTaskContentMutation, UpdateTaskContentMutationVariables>;
export const GetTasksDocument = gql`
    query GetTasks {
  getTasks {
    id
    content
    order
  }
}
    `;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;