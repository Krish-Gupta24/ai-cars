"use client"
import { deleteCar, getCars, updateCarStatus } from '@/actions/cars'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useFetch from '@/hooks/use-fetch'
import { Plus, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const CarList = () => {
    const [search, setsearch] = useState("")

    const router= useRouter()
    const handleSearchSubmit = (e) => {
        e.preventDefault()

        const {
            loading: loadingCars,
            fn: fetchCars,
            data: carsData,
            error:carsError
        } = useFetch(getCars)
        
        useEffect(() => {
            fetchCars(search)
        }, [search])
        
        const {
          loading: deletingCars,
          fn: deleteCarFn,
          data: deleteResult,
          error: deleteError,
        } = useFetch(deleteCar);

        const {
          loading: updatingCars,
          fn: updatingCarsFn,
          data: updateResult,
          error: updateError,
        } = useFetch(updateCarStatus);

    }
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Button
          onClick={() => {
            router.push("/admin/cars/create");
          }}
          className="flex items-center"
        >
          <Plus className="h-4 w-4" />
          Add Car
        </Button>
        <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-500" />
            <Input
              className="pl-9 w-full sm:w-60"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="search"
              placeholder="Search Cars..."
            />
          </div>
        </form>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CarList