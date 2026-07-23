package com.se190588.mvc.repository;

import com.se190588.mvc.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TourRepository extends JpaRepository<Tour, Integer> {

    // Lay toan bo tour va sap xep theo ten tour tang dan.
    List<Tour> findAllByOrderByTourNameAsc();

    // Tim kiem gan dung theo destination, khong phan biet chu hoa/chu thuong va van sort theo ten tour.
    List<Tour> findByDestinationContainingIgnoreCaseOrderByTourNameAsc(String destination);
}
