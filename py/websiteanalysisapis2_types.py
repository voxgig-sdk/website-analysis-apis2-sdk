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
    status_code: int
    url: str


class DeadLinkCheckerListMatch(TypedDict, total=False):
    status_code: int
    url: str


class Performance(TypedDict, total=False):
    load_time: float
    page_size: int
    performance_score: int
    request: int
    success: bool
    url: str


class PerformanceLoadMatch(TypedDict, total=False):
    load_time: float
    page_size: int
    performance_score: int
    request: int
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
    heading: dict
    keyword: list
    recommendation: list
    score: int
    success: bool
    title: str
    url: str


class SeoListMatch(TypedDict, total=False):
    description: str
    heading: dict
    keyword: list
    recommendation: list
    score: int
    success: bool
    title: str
    url: str


class Ssl(TypedDict, total=False):
    days_remaining: int
    issuer: str
    subject: str
    success: bool
    url: str
    valid: bool
    valid_from: str
    valid_to: str


class SslLoadMatch(TypedDict, total=False):
    days_remaining: int
    issuer: str
    subject: str
    success: bool
    url: str
    valid: bool
    valid_from: str
    valid_to: str


class TechStackDetection(TypedDict, total=False):
    category: str
    name: str
    version: str


class TechStackDetectionListMatch(TypedDict, total=False):
    category: str
    name: str
    version: str
