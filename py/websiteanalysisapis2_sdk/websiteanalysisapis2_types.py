# Typed models for the WebsiteAnalysisApis2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class DeadLinkChecker(TypedDict, total=False):
    statusCode: int
    url: str


class DeadLinkCheckerListMatch(TypedDict, total=False):
    statusCode: int
    url: str


class Performance(TypedDict, total=False):
    loadTime: float
    pageSize: int
    performanceScore: int
    requests: int
    success: bool
    url: str


class PerformanceLoadMatch(TypedDict, total=False):
    loadTime: float
    pageSize: int
    performanceScore: int
    requests: int
    success: bool
    url: str


class Screenshot(TypedDict, total=False):
    screenshot: str
    success: bool
    url: str


class ScreenshotLoadMatch(TypedDict, total=False):
    screenshot: str
    success: bool
    url: str


class Seo(TypedDict, total=False):
    description: str
    headings: dict
    keywords: list
    recommendations: list
    score: int
    success: bool
    title: str
    url: str


class SeoListMatch(TypedDict, total=False):
    description: str
    headings: dict
    keywords: list
    recommendations: list
    score: int
    success: bool
    title: str
    url: str


class Ssl(TypedDict, total=False):
    daysRemaining: int
    issuer: str
    subject: str
    success: bool
    url: str
    valid: bool
    validFrom: str
    validTo: str


class SslLoadMatch(TypedDict, total=False):
    daysRemaining: int
    issuer: str
    subject: str
    success: bool
    url: str
    valid: bool
    validFrom: str
    validTo: str


class TechStackDetection(TypedDict, total=False):
    category: str
    name: str
    version: str


class TechStackDetectionListMatch(TypedDict, total=False):
    category: str
    name: str
    version: str
