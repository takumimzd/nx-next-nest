/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * Nx-Next-Nest
 * Nx-Next-Nest description
 * OpenAPI spec version: 1.0
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CreateTodoDto, UpdateTodoDto } from './types';

export const appControllerGetData = <TData = AxiosResponse<void>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api`, options);
};

export const todosControllerCreate = <TData = AxiosResponse<void>>(
  createTodoDto: CreateTodoDto,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/todos`, createTodoDto, options);
};

export const todosControllerFindAll = <TData = AxiosResponse<void>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/todos`, options);
};

export const todosControllerFindOne = <TData = AxiosResponse<void>>(
  id: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/todos/${id}`, options);
};

export const todosControllerUpdate = <TData = AxiosResponse<void>>(
  id: string,
  updateTodoDto: UpdateTodoDto,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.patch(`/api/todos/${id}`, updateTodoDto, options);
};

export const todosControllerRemove = <TData = AxiosResponse<void>>(
  id: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.delete(`/api/todos/${id}`, options);
};

export type AppControllerGetDataResult = AxiosResponse<void>;
export type TodosControllerCreateResult = AxiosResponse<void>;
export type TodosControllerFindAllResult = AxiosResponse<void>;
export type TodosControllerFindOneResult = AxiosResponse<void>;
export type TodosControllerUpdateResult = AxiosResponse<void>;
export type TodosControllerRemoveResult = AxiosResponse<void>;
