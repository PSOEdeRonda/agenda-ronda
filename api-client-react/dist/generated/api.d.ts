import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AttachResourcesInput, CalendarDay, Category, CategoryInput, CategoryUpdate, Event, EventInput, EventUpdate, EventsStats, GetCalendarEventsParams, HealthStatus, ListEventsParams, ListResourcesParams, Resource, ResourceInput, ResourceUpdate, UploadUrlRequest, UploadUrlResponse } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListEventsUrl: (params?: ListEventsParams) => string;
/**
 * @summary List all cultural events
 */
export declare const listEvents: (params?: ListEventsParams, options?: RequestInit) => Promise<Event[]>;
export declare const getListEventsQueryKey: (params?: ListEventsParams) => readonly ["/api/events", ...ListEventsParams[]];
export declare const getListEventsQueryOptions: <TData = Awaited<ReturnType<typeof listEvents>>, TError = ErrorType<unknown>>(params?: ListEventsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEvents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEventsQueryResult = NonNullable<Awaited<ReturnType<typeof listEvents>>>;
export type ListEventsQueryError = ErrorType<unknown>;
/**
 * @summary List all cultural events
 */
export declare function useListEvents<TData = Awaited<ReturnType<typeof listEvents>>, TError = ErrorType<unknown>>(params?: ListEventsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateEventUrl: () => string;
/**
 * @summary Create a new event
 */
export declare const createEvent: (eventInput: EventInput, options?: RequestInit) => Promise<Event>;
export declare const getCreateEventMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEvent>>, TError, {
        data: BodyType<EventInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createEvent>>, TError, {
    data: BodyType<EventInput>;
}, TContext>;
export type CreateEventMutationResult = NonNullable<Awaited<ReturnType<typeof createEvent>>>;
export type CreateEventMutationBody = BodyType<EventInput>;
export type CreateEventMutationError = ErrorType<void>;
/**
* @summary Create a new event
*/
export declare const useCreateEvent: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEvent>>, TError, {
        data: BodyType<EventInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createEvent>>, TError, {
    data: BodyType<EventInput>;
}, TContext>;
export declare const getListUpcomingEventsUrl: () => string;
/**
 * @summary List upcoming events in the next 30 days
 */
export declare const listUpcomingEvents: (options?: RequestInit) => Promise<Event[]>;
export declare const getListUpcomingEventsQueryKey: () => readonly ["/api/events/upcoming"];
export declare const getListUpcomingEventsQueryOptions: <TData = Awaited<ReturnType<typeof listUpcomingEvents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUpcomingEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUpcomingEvents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUpcomingEventsQueryResult = NonNullable<Awaited<ReturnType<typeof listUpcomingEvents>>>;
export type ListUpcomingEventsQueryError = ErrorType<unknown>;
/**
 * @summary List upcoming events in the next 30 days
 */
export declare function useListUpcomingEvents<TData = Awaited<ReturnType<typeof listUpcomingEvents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUpcomingEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCalendarEventsUrl: (params?: GetCalendarEventsParams) => string;
/**
 * @summary Get events grouped by date for calendar view
 */
export declare const getCalendarEvents: (params?: GetCalendarEventsParams, options?: RequestInit) => Promise<CalendarDay[]>;
export declare const getGetCalendarEventsQueryKey: (params?: GetCalendarEventsParams) => readonly ["/api/events/calendar", ...GetCalendarEventsParams[]];
export declare const getGetCalendarEventsQueryOptions: <TData = Awaited<ReturnType<typeof getCalendarEvents>>, TError = ErrorType<unknown>>(params?: GetCalendarEventsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCalendarEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCalendarEvents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCalendarEventsQueryResult = NonNullable<Awaited<ReturnType<typeof getCalendarEvents>>>;
export type GetCalendarEventsQueryError = ErrorType<unknown>;
/**
 * @summary Get events grouped by date for calendar view
 */
export declare function useGetCalendarEvents<TData = Awaited<ReturnType<typeof getCalendarEvents>>, TError = ErrorType<unknown>>(params?: GetCalendarEventsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCalendarEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetEventsStatsUrl: () => string;
/**
 * @summary Get aggregate statistics about events
 */
export declare const getEventsStats: (options?: RequestInit) => Promise<EventsStats>;
export declare const getGetEventsStatsQueryKey: () => readonly ["/api/events/stats"];
export declare const getGetEventsStatsQueryOptions: <TData = Awaited<ReturnType<typeof getEventsStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEventsStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEventsStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEventsStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getEventsStats>>>;
export type GetEventsStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get aggregate statistics about events
 */
export declare function useGetEventsStats<TData = Awaited<ReturnType<typeof getEventsStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEventsStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetEventUrl: (id: number) => string;
/**
 * @summary Get a single event by ID
 */
export declare const getEvent: (id: number, options?: RequestInit) => Promise<Event>;
export declare const getGetEventQueryKey: (id: number) => readonly [`/api/events/${number}`];
export declare const getGetEventQueryOptions: <TData = Awaited<ReturnType<typeof getEvent>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEvent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEvent>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEventQueryResult = NonNullable<Awaited<ReturnType<typeof getEvent>>>;
export type GetEventQueryError = ErrorType<void>;
/**
 * @summary Get a single event by ID
 */
export declare function useGetEvent<TData = Awaited<ReturnType<typeof getEvent>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEvent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateEventUrl: (id: number) => string;
/**
 * @summary Update an event
 */
export declare const updateEvent: (id: number, eventUpdate: EventUpdate, options?: RequestInit) => Promise<Event>;
export declare const getUpdateEventMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEvent>>, TError, {
        id: number;
        data: BodyType<EventUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateEvent>>, TError, {
    id: number;
    data: BodyType<EventUpdate>;
}, TContext>;
export type UpdateEventMutationResult = NonNullable<Awaited<ReturnType<typeof updateEvent>>>;
export type UpdateEventMutationBody = BodyType<EventUpdate>;
export type UpdateEventMutationError = ErrorType<void>;
/**
* @summary Update an event
*/
export declare const useUpdateEvent: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEvent>>, TError, {
        id: number;
        data: BodyType<EventUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateEvent>>, TError, {
    id: number;
    data: BodyType<EventUpdate>;
}, TContext>;
export declare const getDeleteEventUrl: (id: number) => string;
/**
 * @summary Delete an event
 */
export declare const deleteEvent: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteEventMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEvent>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteEvent>>, TError, {
    id: number;
}, TContext>;
export type DeleteEventMutationResult = NonNullable<Awaited<ReturnType<typeof deleteEvent>>>;
export type DeleteEventMutationError = ErrorType<void>;
/**
* @summary Delete an event
*/
export declare const useDeleteEvent: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEvent>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteEvent>>, TError, {
    id: number;
}, TContext>;
export declare const getGetEventBySlugUrl: (slug: string) => string;
/**
 * @summary Get a single event by slug (for SEO-friendly URLs)
 */
export declare const getEventBySlug: (slug: string, options?: RequestInit) => Promise<Event>;
export declare const getGetEventBySlugQueryKey: (slug: string) => readonly [`/api/events/slug/${string}`];
export declare const getGetEventBySlugQueryOptions: <TData = Awaited<ReturnType<typeof getEventBySlug>>, TError = ErrorType<void>>(slug: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEventBySlug>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEventBySlug>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEventBySlugQueryResult = NonNullable<Awaited<ReturnType<typeof getEventBySlug>>>;
export type GetEventBySlugQueryError = ErrorType<void>;
/**
 * @summary Get a single event by slug (for SEO-friendly URLs)
 */
export declare function useGetEventBySlug<TData = Awaited<ReturnType<typeof getEventBySlug>>, TError = ErrorType<void>>(slug: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEventBySlug>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCategoriesUrl: () => string;
/**
 * @summary List all categories with event counts
 */
export declare const listCategories: (options?: RequestInit) => Promise<Category[]>;
export declare const getListCategoriesQueryKey: () => readonly ["/api/categories"];
export declare const getListCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof listCategories>>>;
export type ListCategoriesQueryError = ErrorType<unknown>;
/**
 * @summary List all categories with event counts
 */
export declare function useListCategories<TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateCategoryUrl: () => string;
/**
 * @summary Create a new category
 */
export declare const createCategory: (categoryInput: CategoryInput, options?: RequestInit) => Promise<Category>;
export declare const getCreateCategoryMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
        data: BodyType<CategoryInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
    data: BodyType<CategoryInput>;
}, TContext>;
export type CreateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof createCategory>>>;
export type CreateCategoryMutationBody = BodyType<CategoryInput>;
export type CreateCategoryMutationError = ErrorType<void>;
/**
* @summary Create a new category
*/
export declare const useCreateCategory: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
        data: BodyType<CategoryInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCategory>>, TError, {
    data: BodyType<CategoryInput>;
}, TContext>;
export declare const getUpdateCategoryUrl: (id: number) => string;
/**
 * @summary Update a category
 */
export declare const updateCategory: (id: number, categoryUpdate: CategoryUpdate, options?: RequestInit) => Promise<Category>;
export declare const getUpdateCategoryMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError, {
        id: number;
        data: BodyType<CategoryUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError, {
    id: number;
    data: BodyType<CategoryUpdate>;
}, TContext>;
export type UpdateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof updateCategory>>>;
export type UpdateCategoryMutationBody = BodyType<CategoryUpdate>;
export type UpdateCategoryMutationError = ErrorType<void>;
/**
* @summary Update a category
*/
export declare const useUpdateCategory: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError, {
        id: number;
        data: BodyType<CategoryUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateCategory>>, TError, {
    id: number;
    data: BodyType<CategoryUpdate>;
}, TContext>;
export declare const getDeleteCategoryUrl: (id: number) => string;
/**
 * @summary Delete a category
 */
export declare const deleteCategory: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteCategoryMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
    id: number;
}, TContext>;
export type DeleteCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCategory>>>;
export type DeleteCategoryMutationError = ErrorType<void>;
/**
* @summary Delete a category
*/
export declare const useDeleteCategory: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteCategory>>, TError, {
    id: number;
}, TContext>;
export declare const getListResourcesUrl: (params?: ListResourcesParams) => string;
/**
 * @summary List downloadable resources
 */
export declare const listResources: (params?: ListResourcesParams, options?: RequestInit) => Promise<Resource[]>;
export declare const getListResourcesQueryKey: (params?: ListResourcesParams) => readonly ["/api/resources", ...ListResourcesParams[]];
export declare const getListResourcesQueryOptions: <TData = Awaited<ReturnType<typeof listResources>>, TError = ErrorType<unknown>>(params?: ListResourcesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listResources>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listResources>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListResourcesQueryResult = NonNullable<Awaited<ReturnType<typeof listResources>>>;
export type ListResourcesQueryError = ErrorType<unknown>;
/**
 * @summary List downloadable resources
 */
export declare function useListResources<TData = Awaited<ReturnType<typeof listResources>>, TError = ErrorType<unknown>>(params?: ListResourcesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listResources>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateResourceUrl: () => string;
/**
 * @summary Create a new resource
 */
export declare const createResource: (resourceInput: ResourceInput, options?: RequestInit) => Promise<Resource>;
export declare const getCreateResourceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createResource>>, TError, {
        data: BodyType<ResourceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createResource>>, TError, {
    data: BodyType<ResourceInput>;
}, TContext>;
export type CreateResourceMutationResult = NonNullable<Awaited<ReturnType<typeof createResource>>>;
export type CreateResourceMutationBody = BodyType<ResourceInput>;
export type CreateResourceMutationError = ErrorType<unknown>;
/**
* @summary Create a new resource
*/
export declare const useCreateResource: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createResource>>, TError, {
        data: BodyType<ResourceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createResource>>, TError, {
    data: BodyType<ResourceInput>;
}, TContext>;
export declare const getGetResourceUrl: (id: number) => string;
/**
 * @summary Get a resource by ID
 */
export declare const getResource: (id: number, options?: RequestInit) => Promise<Resource>;
export declare const getGetResourceQueryKey: (id: number) => readonly [`/api/resources/${number}`];
export declare const getGetResourceQueryOptions: <TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetResourceQueryResult = NonNullable<Awaited<ReturnType<typeof getResource>>>;
export type GetResourceQueryError = ErrorType<void>;
/**
 * @summary Get a resource by ID
 */
export declare function useGetResource<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateResourceUrl: (id: number) => string;
/**
 * @summary Update a resource
 */
export declare const updateResource: (id: number, resourceUpdate: ResourceUpdate, options?: RequestInit) => Promise<Resource>;
export declare const getUpdateResourceMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateResource>>, TError, {
        id: number;
        data: BodyType<ResourceUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateResource>>, TError, {
    id: number;
    data: BodyType<ResourceUpdate>;
}, TContext>;
export type UpdateResourceMutationResult = NonNullable<Awaited<ReturnType<typeof updateResource>>>;
export type UpdateResourceMutationBody = BodyType<ResourceUpdate>;
export type UpdateResourceMutationError = ErrorType<void>;
/**
* @summary Update a resource
*/
export declare const useUpdateResource: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateResource>>, TError, {
        id: number;
        data: BodyType<ResourceUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateResource>>, TError, {
    id: number;
    data: BodyType<ResourceUpdate>;
}, TContext>;
export declare const getDeleteResourceUrl: (id: number) => string;
/**
 * @summary Delete a resource
 */
export declare const deleteResource: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteResourceMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteResource>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteResource>>, TError, {
    id: number;
}, TContext>;
export type DeleteResourceMutationResult = NonNullable<Awaited<ReturnType<typeof deleteResource>>>;
export type DeleteResourceMutationError = ErrorType<void>;
/**
* @summary Delete a resource
*/
export declare const useDeleteResource: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteResource>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteResource>>, TError, {
    id: number;
}, TContext>;
export declare const getGetEventResourcesUrl: (id: number) => string;
/**
 * @summary Get resources attached to an event
 */
export declare const getEventResources: (id: number, options?: RequestInit) => Promise<Resource[]>;
export declare const getGetEventResourcesQueryKey: (id: number) => readonly [`/api/events/${number}/resources`];
export declare const getGetEventResourcesQueryOptions: <TData = Awaited<ReturnType<typeof getEventResources>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEventResources>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEventResources>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEventResourcesQueryResult = NonNullable<Awaited<ReturnType<typeof getEventResources>>>;
export type GetEventResourcesQueryError = ErrorType<unknown>;
/**
 * @summary Get resources attached to an event
 */
export declare function useGetEventResources<TData = Awaited<ReturnType<typeof getEventResources>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEventResources>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSetEventResourcesUrl: (id: number) => string;
/**
 * @summary Set resources attached to an event (replaces all)
 */
export declare const setEventResources: (id: number, attachResourcesInput: AttachResourcesInput, options?: RequestInit) => Promise<Resource[]>;
export declare const getSetEventResourcesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setEventResources>>, TError, {
        id: number;
        data: BodyType<AttachResourcesInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setEventResources>>, TError, {
    id: number;
    data: BodyType<AttachResourcesInput>;
}, TContext>;
export type SetEventResourcesMutationResult = NonNullable<Awaited<ReturnType<typeof setEventResources>>>;
export type SetEventResourcesMutationBody = BodyType<AttachResourcesInput>;
export type SetEventResourcesMutationError = ErrorType<unknown>;
/**
* @summary Set resources attached to an event (replaces all)
*/
export declare const useSetEventResources: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setEventResources>>, TError, {
        id: number;
        data: BodyType<AttachResourcesInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setEventResources>>, TError, {
    id: number;
    data: BodyType<AttachResourcesInput>;
}, TContext>;
export declare const getGetPostResourcesUrl: (id: number) => string;
/**
 * @summary Get resources attached to a post
 */
export declare const getPostResources: (id: number, options?: RequestInit) => Promise<Resource[]>;
export declare const getGetPostResourcesQueryKey: (id: number) => readonly [`/api/posts/${number}/resources`];
export declare const getGetPostResourcesQueryOptions: <TData = Awaited<ReturnType<typeof getPostResources>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPostResources>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPostResources>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPostResourcesQueryResult = NonNullable<Awaited<ReturnType<typeof getPostResources>>>;
export type GetPostResourcesQueryError = ErrorType<unknown>;
/**
 * @summary Get resources attached to a post
 */
export declare function useGetPostResources<TData = Awaited<ReturnType<typeof getPostResources>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPostResources>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSetPostResourcesUrl: (id: number) => string;
/**
 * @summary Set resources attached to a post (replaces all)
 */
export declare const setPostResources: (id: number, attachResourcesInput: AttachResourcesInput, options?: RequestInit) => Promise<Resource[]>;
export declare const getSetPostResourcesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setPostResources>>, TError, {
        id: number;
        data: BodyType<AttachResourcesInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setPostResources>>, TError, {
    id: number;
    data: BodyType<AttachResourcesInput>;
}, TContext>;
export type SetPostResourcesMutationResult = NonNullable<Awaited<ReturnType<typeof setPostResources>>>;
export type SetPostResourcesMutationBody = BodyType<AttachResourcesInput>;
export type SetPostResourcesMutationError = ErrorType<unknown>;
/**
* @summary Set resources attached to a post (replaces all)
*/
export declare const useSetPostResources: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setPostResources>>, TError, {
        id: number;
        data: BodyType<AttachResourcesInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setPostResources>>, TError, {
    id: number;
    data: BodyType<AttachResourcesInput>;
}, TContext>;
export declare const getRequestUploadUrlUrl: () => string;
/**
 * @summary Request a presigned URL for file upload
 */
export declare const requestUploadUrl: (uploadUrlRequest: UploadUrlRequest, options?: RequestInit) => Promise<UploadUrlResponse>;
export declare const getRequestUploadUrlMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<UploadUrlRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<UploadUrlRequest>;
}, TContext>;
export type RequestUploadUrlMutationResult = NonNullable<Awaited<ReturnType<typeof requestUploadUrl>>>;
export type RequestUploadUrlMutationBody = BodyType<UploadUrlRequest>;
export type RequestUploadUrlMutationError = ErrorType<unknown>;
/**
* @summary Request a presigned URL for file upload
*/
export declare const useRequestUploadUrl: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<UploadUrlRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<UploadUrlRequest>;
}, TContext>;
export declare const getGetStorageObjectUrl: (objectPath: string) => string;
/**
 * @summary Serve an uploaded object
 */
export declare const getStorageObject: (objectPath: string, options?: RequestInit) => Promise<Blob>;
export declare const getGetStorageObjectQueryKey: (objectPath: string) => readonly [`/api/storage/objects/${string}`];
export declare const getGetStorageObjectQueryOptions: <TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<unknown>>(objectPath: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStorageObjectQueryResult = NonNullable<Awaited<ReturnType<typeof getStorageObject>>>;
export type GetStorageObjectQueryError = ErrorType<unknown>;
/**
 * @summary Serve an uploaded object
 */
export declare function useGetStorageObject<TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<unknown>>(objectPath: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map