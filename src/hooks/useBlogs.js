import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import blogService from '../services/blogs'

// Retrieving the blogs using Query
export const useBlogs = () => {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: blogService.getAll,
    })
}

export const useCreateBlog = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: blogService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] }) // for refreshing the bloglist after addition
        }
    })
}

export const useUpdateBlog = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: blogService.update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] })
        }
    })
}

export const useDeleteBlog = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: blogService.remove,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] })
        }
    })
}